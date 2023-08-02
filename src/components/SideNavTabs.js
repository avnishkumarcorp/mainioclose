import React from "react";
import { Link } from "react-router-dom";

const SideNavTabs = ({data}) => {
  return (
    <div>
         <Link className="btn btn-primary" data-toggle="collapse" data-target={`#${data}`} aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </Link>
        <div id={data} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body">
        Anim pariatur clica assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
    </div>
  )
};

export default SideNavTabs;
