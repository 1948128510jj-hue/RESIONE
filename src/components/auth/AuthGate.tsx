'use client';

import { useState } from 'react';

export default function AuthGate() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function setCookie(name: string, value: string, days: number) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const token = btoa(`${username}:${password}`);

    // Test credentials via fetch
    fetch(window.location.origin + '/api/ping', {
      headers: { Authorization: `Basic ${token}` },
    }).then((res) => {
      if (res.status !== 401) {
        // Valid credentials — set cookie and reload
        setCookie('resione_auth', token, 30);
        window.location.reload();
      } else {
        setError('Wrong username or password.');
        setLoading(false);
      }
    }).catch(() => {
      setError('Network error. Please try again.');
      setLoading(false);
    });
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#0a0a0a',
      fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    }}>
      <div style={{
        background: '#141414',
        border: '1px solid #2a2a2a',
        borderRadius: 16,
        padding: '48px 40px',
        maxWidth: 440,
        width: '90%',
        textAlign: 'center' as const,
      }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>🔒</div>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: '#fff' }}>
          Access Restricted
        </h1>
        <p style={{ fontSize: 14, color: '#888', marginBottom: 28, lineHeight: 1.5 }}>
          This site is for internal use only.<br />
          Please enter the password to continue.
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            name="username"
            type="text"
            placeholder="Username"
            autoComplete="username"
            autoFocus
            style={{
              padding: '12px 16px',
              border: '1px solid #333',
              borderRadius: 8,
              background: '#1a1a1a',
              color: '#fff',
              fontSize: 15,
              outline: 'none',
            }}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            style={{
              padding: '12px 16px',
              border: '1px solid #333',
              borderRadius: 8,
              background: '#1a1a1a',
              color: '#fff',
              fontSize: 15,
              outline: 'none',
            }}
          />
          {error && <p style={{ color: '#e94560', fontSize: 13, margin: 0 }}>{error}</p>}
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: 12,
              border: 'none',
              borderRadius: 8,
              background: '#e94560',
              color: '#fff',
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'Verifying...' : 'Sign In'}
          </button>
        </form>
        <p style={{ fontSize: 12, color: '#555', marginTop: 20 }}>
          RESIONE Internal System
        </p>
      </div>
    </div>
  );
}
