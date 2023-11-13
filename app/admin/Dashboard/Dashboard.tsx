import * as elements from "typed-html";
import AdminPage from "../admin";

const DashBoard = ({children}: elements.Children) => {
  return (
    <AdminPage>
      <div>DashBoard</div>
      {children}
    </AdminPage>
  );
};

export default DashBoard;
