import { useState, useEffect } from 'react';
import { AuthContext } from './authContext';
import { supabase } from '../SupabaseClient';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchProfile(userId) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      console.error('Fetch profile error:', error);
      setProfile(null);
    } else {
      setProfile(data);
    }
  }

  useEffect(() => {
    async function checkExistingSession() {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;

        const session = data.session;
        setUser(session?.user ?? null);
        if (session) {
          await fetchProfile(session.user.id);
        } else {
          setProfile(null);
        }
      } catch (error) {
        console.error('Session lookup error:', error);
        setUser(null);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    }

    checkExistingSession();

    const listener = supabase.auth.onAuthStateChange(function (event, session) {
      if (session) {
        setUser(session.user);
        setTimeout(() => fetchProfile(session.user.id), 0);
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });

    function cleanup() {
      listener.data.subscription.unsubscribe();
    }

    return cleanup;
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, profile, setProfile, loading }}>
      {children}
    </AuthContext.Provider>
  );
}