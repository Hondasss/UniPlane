'use client';

import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface AdminPanelProps {
  onBack: () => void;
}

export function AdminPanel({ onBack }: AdminPanelProps) {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Painel Administrativo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted p-4 rounded">
          <p className="text-sm text-muted-foreground mb-2">Funcionalidades Admin</p>
          <p className="text-muted-foreground">
            Painel administrativo em desenvolvimento. Em breve você poderá gerenciar voos, aeroportos,
            passageiros e reservas.
          </p>
        </div>

        <div className="grid gap-4">
          <Button variant="outline" disabled>
            Gerenciar Voos
          </Button>
          <Button variant="outline" disabled>
            Gerenciar Aeroportos
          </Button>
          <Button variant="outline" disabled>
            Visualizar Reservas
          </Button>
          <Button variant="outline" disabled>
            Gerenciar Usuários
          </Button>
        </div>

        <Button onClick={onBack} className="w-full">
          Voltar
        </Button>
      </CardContent>
    </Card>
  );
}
