import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Widget from "../../components/widget/Widget";
import Featured from '../../components/Featured/Featured'
import List from './../../components/table/Table';
import style from './Home.module.css'
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
      <div className={style.home}>
        {/* -----------widgates---------- */}
        <div className={style.widgets}>
          <NavLink to={"/users"} className={style.NavLink}>
            <Widget type="user" className={style.widgitActive}/>
          </NavLink>
          <NavLink to={"/users"}className={style.NavLink}>
            <Widget type="order"/>
            </NavLink>
          <NavLink to={"/users"}className={style.NavLink}>
            <Widget type="earnings"/>
            </NavLink>
          <NavLink to={"/users"}className={style.NavLink}>
            <Widget type="balance"/>
            </NavLink>
          </div>
          <div className={style.charts}>
        <Featured className={style.Featured}/>
        <Chart className={style.chart} title="Last 6 month(Revenue)" aspect={3.5/1}/>
          </div>
          <div className={style.listContainer}>
          <div className={style.homeWidgets}>
            <div className={style.widgetDoctor}>
              <WidgetSm/>
            </div>
            <div className={style.widgetmerchant}>
              <WidgetLg/> 
            </div>
      </div>
            <div className={style.transitionTitle}> Latest Transaction</div>
          <List/>
          </div>
    </div>
  );
}

