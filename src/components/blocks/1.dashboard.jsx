export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>
        Current Balance: <span>0.00</span>{" "}
        <span style={{ fontSize: "10px" }}>
          (cash, savings, other accounts)
        </span>
      </p>
      <p>
        Daily Income: <span>0.00</span>{" "}
      </p>
      <p>
        Monthly Total Income: <span>0.00</span>{" "}
      </p>
      <p>
        Descretion Expenditure Balance: <span>0.00</span>{" "}
      </p>
    </div>
  );
}
