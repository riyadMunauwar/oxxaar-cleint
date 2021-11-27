import AdminSidebar from "../components/adminCom/AdminSideBar";
import AddProduct from "../components/adminCom/addProduct";

const AdminPage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <AddProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
