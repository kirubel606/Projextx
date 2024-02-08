import * as React from "react";
import kena from "../assets/kena.svg";
function About() {
  return (
    <div className="row bg-black" style={{ height: "100vh" }}>
      <div className="col-md-5" style={{marginTop:"0px"}}>
      <img src={kena} style={{ width: "400px" , marginTop:"0px" }} />
      </div>
      <p className="col-md-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        facere ipsam, vitae eveniet architecto et, amet rerum minus commodi
        corrupti inventore aperiam recusandae porro. Quas, rem! Corrupti
        delectus soluta fugit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fugit eveniet neque illum nemo itaque aliquid dolores
        doloribus. Fugit modi facere beatae vel amet explicabo soluta
        accusantium, culpa totam quidem quia! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Inventore repellendus voluptas obcaecati
        vitae, maxime voluptate iusto facere qui doloremque! Eaque assumenda
        molestias quaerat optio autem dolorum aut enim cupiditate tempore. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Ullam hic corporis
        error repudiandae, sequi assumenda cupiditate nobis rem voluptates
        cumque cum nesciunt fuga, dolor nulla consectetur illum eveniet
        perferendis ea! Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Harum enim dignissimos mollitia! Saepe, veniam non, animi
        quibusdam placeat eligendi eaque sit fugiat doloremque praesentium ea
        minima temporibus, ad id fuga!Lorem
      </p>
    </div>
  );
}
export default About;
