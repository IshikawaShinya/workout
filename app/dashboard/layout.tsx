import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dashboard-layout">
      <header>
        <h1>ダッシュボード</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2023 ダッシュボードアプリ</p>
      </footer>
    </div>
  );
}
