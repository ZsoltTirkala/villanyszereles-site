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
            <td>Lámpa felszerelése-bekötése</td>
            <td>4000 Ft-tól mérettől és típustól függően</td>
          </tr>
          <tr>
            <td>Kapcsoló felszerelése</td>
            <td>1800 Ft/db</td>
          </tr>
          <tr>
            <td>Dugalj felszerelése</td>
            <td>1800 Ft/db</td>
          </tr>
          <tr>
            <td>Lakáselosztó cseréje</td>
            <td>18000 Ft-tól mérettől és típustól függően</td>
          </tr>
          <tr>
            <td>Kismegszakító beszerelés</td>
            <td>2400 Ft /db</td>
          </tr>
          <tr>
            <td>Életvédelmi relé (Fi-relé) beépítése</td>
            <td>16000-24000 Ft /db</td>
          </tr>
          <tr>
            <td>Moduláris csengő beépítése</td>
            <td>3500 Ft/db</td>
          </tr>
          <tr>
            <td>Mozgásérzékelő beépítése</td>
            <td>4500 Ft/db</td>
          </tr>
          <tr>
            <td>Alkonykapcsoló beépítése</td>
            <td>4500Ft/db</td>
          </tr>
          <tr>
            <td>Sütő-főzőlap bekötése garanciával</td>
            <td>10000 –15000 Ft/db</td>
          </tr>
        </tbody>  
    </table>

      </div>
    </div>
  );
}
