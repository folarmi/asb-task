import Card from "../base/Card";
import DivisionCard from "../base/DivisionCard";
import Header from "../base/Header";
import Table from "../base/Table";
import TableHeader from "../base/TableHeader";
import Timeline from "../base/Timeline";
import path from "../assets/Path.png";

function Home() {
  return (
    <div>
      <Header />

      <div className="sub-header">
        <p>Division</p>
        <img src={path} alt="" />
        <p>Module</p>
      </div>

      <section className="cards">
        <Card number="31454" title="Ongoing metric" />
        <Card number="2344" title="Past metric" />
        <Card number="142244" title="Missed metric" />
        <Card number="635" title="Failed metric" />
        <Card number="11334" title="Pending metric" />
      </section>

      <section className="home-flex">
        <div className="timeline--flex">
          <DivisionCard />
          <Timeline />
        </div>

        <div className="tables">
          <TableHeader />
          <Table
            className="border"
            name="Courtney Henry"
            street="775 Rolling Green Rd."
            status="No Issues"
            entry="19"
            entryState="Homogenous"
            risk="Low"
            myColor="#8c70ff"
            riskColor="#3ab65c"
            // bg="#8c70ff"
          />
          <Table
            className="border"
            name="Darell Steward"
            street="7529 E. Pecan St.."
            status="2 Issues found"
            entry="10"
            entryState="Heterogenous"
            risk="Mid"
            myColor="#f4b400"
            riskColor="#3c3ab6"
            // bg="#8c70ff"
          />
          <Table
            className="border"
            name="Cody Fisher"
            street="3605 Parker Rd."
            status="No Issues"
            entry="8"
            entryState="Homogenous"
            risk="Mid"
            myColor="#8c70ff"
            riskColor="#3c3ab6"
            // bg="#8c70ff"
          />
          <Table
            className="border"
            name="Bessie Cooper"
            street="775 Rolling Green Rd."
            status="1 Issue found"
            entry="12"
            entryState="Heterogenous"
            risk="High"
            myColor="#f4b400"
            riskColor="#b63a3a"
            // bg="#8c70ff"
          />
          <Table
            className="border"
            name="Annette Black"
            street="8080 Railroad St."
            status="No Issues"
            entry="13"
            entryState="Heterogenous"
            risk="Low"
            myColor="#8c70ff"
            riskColor="#3ab65c"
            // bg="#8c70ff"
          />
          <Table
            className="border"
            name="Jenny Wilson"
            street="8080 Railroad St."
            status="5 Issues found"
            entry="18"
            entryState="Heterogenous"
            risk="High"
            myColor="#f4b400"
            riskColor="#b63a3a"
            // bg="#8c70ff"
          />
          <Table
            className="border"
            name="Darlene Robertson"
            street="3890 Poplar Dr."
            status="2 Issues found"
            entry="6"
            entryState="Homorogenous"
            risk="Mid"
            myColor="#f4b400"
            riskColor="#3c3ab6"
            // bg="#8c70ff"
          />
          <Table
            className="border"
            name="Ralph Edwards"
            street="8558 Green Rd."
            status="No Issues"
            entry="14"
            entryState="Homogenous"
            risk="Low"
            myColor="#8c70ff"
            riskColor="#3ab65c"
            // bg="#8c70ff"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
