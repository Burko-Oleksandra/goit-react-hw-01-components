import TransactionHistory from './TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';

export default function TransactionHistoryApp() {
  return <TransactionHistory items={transactions} />;
}

// export default function TransactionHistoryApp() {
//   return (
//     <table class="transaction-history">
//       <thead>
//         <tr>
//           <th>Type</th>
//           <th>Amount</th>
//           <th>Currency</th>
//         </tr>
//       </thead>
//       <tbody>
//         {transactions.map(transaction => (
//           <tr key={transaction.id}>
//             <TransactionHistory
//               type={transaction.type}
//               amount={transaction.amount}
//               currency={transaction.currency}
//             />
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
