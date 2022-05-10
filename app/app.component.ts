import { Component } from '@angular/core';

@Component({
    
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  columnDefs = [
    {
      headerName: 'S.No',
      field: 'sinumber',
      cellStyle: { 'text-align': 'center' },

    },
    {
      headerName: 'Department',
      field: 'Department',
      cellStyle: { 'text-align': 'center' },
    },
    {
      headerName: 'Employee',
      field: 'employee',
      cellStyle: { 'text-align': 'center' },
    },
    {
      headerName: 'Designation',
      field: 'Designation',
      cellStyle: { 'text-align': 'center' },
      //   rowStyle: { 'text-align': 'center' },
      //   sortable: true,
      //   filter: 'agTextColumnFilter',
    },
    {
      headerName: 'Email',
      field: 'email',
      //   sortable: true,
      //   filter: 'agNumberColumnFilter',
      cellStyle: { 'text-align': 'center' },
    },
    {
      headerName: 'Action',
      field: 'action',
      //   sortable: true,
      //   filter: 'agNumberColumnFilter',
      cellStyle: { 'text-align': 'center' },
    },
  ];

  rowData = [
    {
      sinumber: '1',
      employee: 'Ravi',
      Designation: 'Engineer',
      Department: 'Finance',
      email: 'ravi123@gmail.com',
      action: '...',
    },
    {
      sinumber: '2',
      employee: 'Gopi',
      Designation: 'Developer',
      Department: 'Marketing',
      email: 'gopi123@gmail.com',
      action: '...',
    },
    {
      sinumber: '3',
      employee: 'Naresh',
      Designation: 'Engineer',
      Department: 'Finance',
      email: 'naresh123@gmail.com',
      action: '...',
    },
    {
      sinumber: '4',
      employee: 'Raju',
      Designation: 'Developer',
      Department: 'Marketing',
      email: 'raju123@gmail.com',
      action: '...',
    },
    {
      sinumber: '5',
      employee: 'Kiran',
      Designation: 'Engineer',
      Department: 'Finance',
      email: 'kiran123@gmail.com',
      action: '...',
    },
    {
      sinumber: '6',
      employee: 'Suresh',
      Designation: 'Developer',
      Department: 'Marketing',
      email: 'sursh123@gmail.com',
      action: '...',
    },
  ];
}
