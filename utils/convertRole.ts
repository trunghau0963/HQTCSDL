export const convertRoleViToEn = (role: string) => {
  if (role === "BENHNHAN") return "patient";
  if (role === "NHANVIEN") return "staff";
  if (role === "NHASI") return "dentist";
  if (role === "QUANTRI") return "admin";
};

export const printInvoiceBody = () => {
  const invoiceBody = document.getElementById("invoiceBody");

  if (invoiceBody) {
    const originalContents = document.body.innerHTML;
    const printContents = invoiceBody.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  } else {
    console.error("Element with id 'invoiceBody' not found.");
  }
};
