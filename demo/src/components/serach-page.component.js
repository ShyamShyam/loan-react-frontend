import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'User_Id',
        field: 'user_id',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Borrower_Name',
        field: 'borrower_name',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Loan_Amount',
        field: 'loan_amount',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Loan_Term',
        field: 'loan_term',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Loan_Type',
        field: 'loan_type',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Property_Document',
        field: 'property_document',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Address1',
        field: 'address1',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Address2',
        field: 'address2',
        sort: 'asc',
        width: 200
      },
      {
        label: 'City',
        field: 'city',
        sort: 'asc',
        width: 100
      },
      {
        label: 'State',
        field: 'state',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Zipcode',
        field: 'zipcode',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      
    ]
  };

  return (
    <div className="col-12 table-container">
        <MDBDataTable
        striped
        bordered
        small
        data={data}
        />
    </div>
  );
}

export default DatatablePage;