import "./intro.scss";

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Üdvözlöm a Perfectvill oldalán!</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus faucibus, neque et accumsan commodo, odio nulla imperdiet nunc, vel semper ipsum metus quis lorem. 
            Aliquam a augue euismod, vulputate leo id, vestibulum justo. 
            Donec sagittis, diam vitae dapibus semper, nulla nibh malesuada urna, nec pellentesque metus purus id neque. 
            Proin sollicitudin mauris id augue pellentesque, nec aliquam augue interdum. 
            Vestibulum consequat volutpat sem, sit amet iaculis lacus ultricies vitae. 
            Nulla ultrices eu ante in finibus. Mauris magna elit, luctus et fermentum non, aliquam eget urna. 
            Ut vitae ante eu augue euismod pellentesque vitae a nunc. Nullam quis ultrices mauris. 
            Phasellus felis neque, dignissim fermentum hendrerit quis, 
            suscipit in urna. Duis purus magna, placerat et diam eu, aliquam scelerisque leo. 
            Fusce sit amet nibh non nisi dapibus vestibulum sed nec urna. Integer convallis, 
            diam in ornare luctus, mi nulla vulputate justo, nec tempor eros nisi vitae dolor. 
            Vestibulum in mattis elit, sit amet tempus tellus.</h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
