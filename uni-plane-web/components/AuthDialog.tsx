'use client';

import * as React from 'react';
import { User } from '@/lib/types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface AuthDialogProps {
  open: boolean;
  onClose: () => void;
  onLogin: (user: User) => void;
}

export function AuthDialog({ open, onClose, onLogin }: AuthDialogProps) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Mock authentication
    const mockUser: User = {
      type: username === 'admin' ? 'admin' : 'passenger',
      id: 'user_' + Date.now(),
      name: username.charAt(0).toUpperCase() + username.slice(1),
      email: username + '@example.com',
    };

    onLogin(mockUser);
    setUsername('');
    setPassword('');
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Fazer Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Usuário</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuário"
                required
              />
              <p className="text-xs text-muted-foreground">Dica: Use &apos;admin&apos; para conta admin</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
            </div>

            <div className="flex gap-4 justify-end pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit">Entrar</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
