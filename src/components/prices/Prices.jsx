import "./prices.scss";

export default function Prices() {
  return (
    <div className="prices" id="prices">
      <h1>Árak</h1>
      <div className="container">
      <table id="price-table">
        <tbody>
          <tr>
            <th>Szolgáltatás</th>
            <th>Árak</th>
          </tr>
          <tr>
            <td>Fúrás</td>
            <td>5000 Ft</td>
          </tr>
          <tr>
            <td>Faragás</td>
            <td>2500 Ft</td>
          </tr>
        </tbody>  
    </table>

      </div>
    </div>
  );
}
