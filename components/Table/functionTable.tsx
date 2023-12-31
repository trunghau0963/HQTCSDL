import * as elements from "typed-html";

export const TableOfPerson = () => {
  return (
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Phone Number</th>
      <th>PWD</th>
      <th>Date of birth</th>
      <th>Address</th>
      <th>Is block ?</th>
      <th>Edit</th>
    </tr>
  );
};

export const TableOfDrug = () => {
  return (
    <tr>
      <th>Id Consignment</th>
      <th>Id Drug</th>
      <th>Name Drug</th>
      <th>Assign</th>
      <th>Quantity</th>
      <th>Unit</th>
      <th>Exp day</th>
      <th>Price</th>
      <th class="text-right">Action</th>
    </tr>
  );
};

export const TableOfInvoice = () => {
  return (
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Phone Number</th>
      <th>PWD</th>
      <th>Date of birth</th>
      <th>Address</th>
      <th>Is block ?</th>
      <th>Edit</th>
    </tr>
  );
};

export const TableOfService = () => {
  return (
    <tr>
      <th>Id Service</th>
      <th>Name Service</th>
      <th>Price</th>
      <th class="text-right">Action</th>
    </tr>
  );
};

export const TableOfSchedule = () => {
  return (
    <tr>
      <th style="min-width:100px;" class="ms-2">
        Image
      </th>
      <th>Number</th>
      <th>ID Dentist</th>
      <th>Name Of Dentist</th>
      <th>Date</th>
      <th>Time</th>
      <th class="text-right">State</th>
    </tr>
  );
};

export const TableOfScheduleOfNhasi = () => {
  return (
    <tr>
      <th style="min-width:100px;" class="ms-2">
        Image
      </th>
      <th>Number</th>
      <th>ID Patient</th>
      <th>Name Of Patient</th>
      <th>Date</th>
      <th>Time</th>
      <th class="text-right">State</th>
    </tr>
  );
};
