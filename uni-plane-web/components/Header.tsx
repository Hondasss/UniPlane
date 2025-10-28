'use client';

import { Plane, User, LogOut, Settings } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { User as UserType } from '@/lib/types';

interface HeaderProps {
  user: UserType | null;
  onLogin: () => void;
  onLogout: () => void;
  onAdminPanel?: () => void;
}

export function Header({ user, onLogin, onLogout, onAdminPanel }: HeaderProps) {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-primary font-bold">SkyFly Airlines</h1>
            <p className="text-xs text-muted-foreground">Voe com Conforto</p>
          </div>
        </div>

        <div>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <User className="w-4 h-4" />
                  {user.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-sm">{user.email}</DropdownMenuItem>
                {user.type === 'admin' && onAdminPanel && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={onAdminPanel} className="gap-2">
                      <Settings className="w-4 h-4" />
                      Painel Administrativo
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout} className="gap-2">
                  <LogOut className="w-4 h-4" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={onLogin}>Entrar / Cadastrar</Button>
          )}
        </div>
      </div>
    </header>
  );
}
