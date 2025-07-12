import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/');
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <p className="text-lg">
        👤 Logged in as: <strong>{session.user?.name}</strong>
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-900 p-6 rounded-xl shadow">📈 Portfolio Summary</div>
        <div className="bg-zinc-900 p-6 rounded-xl shadow">📰 Market News</div>
        <div className="bg-zinc-900 p-6 rounded-xl shadow">🤖 AI Assistant</div>
        <div className="bg-zinc-900 p-6 rounded-xl shadow">🔁 Automations</div>
      </div>
    </main>
  );
}
