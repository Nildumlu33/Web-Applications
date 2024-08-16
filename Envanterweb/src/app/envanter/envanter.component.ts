import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Envanter } from '../models/envanter.model';
@Component
  ({
    selector: 'envtr-envanter',
    templateUrl: './envanter.component.html',
    styleUrl: './envanter.component.css'
  })
export class EnvanterComponent implements OnInit {
  constructor(private http: HttpClient) { }

  searchValue: String = '';
  envanterData: Envanter[] = [];
  selectedEnvanter: Envanter = {};
  allSelected: boolean = false;

  loading: boolean = true;

  dialogShow: boolean = false;
  dialogDeleteShow: boolean = false;

  isUpdate = false;


  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.getEnvanters().then((data) => {
      this.loading = false;
      this.envanterData = data;
    });
  }
  getEnvanters() {
    return this.http.get<any>('http://localhost:5109/Urun/getUrunList')
      .toPromise()
      .then(res => {
        console.log(res);
        return res as Envanter[];
      })
      .then(data => data);
  }

  openDialog() {
    this.dialogShow = true;
  }

  confirmDelete() {
    var url = "http://localhost:5109/Urun/urunSil?id=" + this.selectedEnvanter.id;
    this.http.post<any>(url, null)
      .toPromise()
      .then(res => {

        if (res == true) { this.dialogDeleteShow = false; this.loadData(); }
        return res as Envanter[];
      })
      .then(data => data);
  }

  envanterKaydet() {
    if (this.isUpdate) {
      this.http.post<any>('http://localhost:5109/Urun/urunGuncelle', this.selectedEnvanter)
        .toPromise()
        .then(res => {

          if (res == true) { this.dialogShow = false; this.loadData(); }
          return res as Envanter[];
        })
        .then(data => data);
    }
    else {
      this.http.post<any>('http://localhost:5109/Urun/urunEkle', this.selectedEnvanter)
        .toPromise()
        .then(res => {

          if (res == true) { this.dialogShow = false; this.loadData(); }
          return res as Envanter[];
        })
        .then(data => data);
    }

  }

  // toggleAll(event: any)
  // {
  //   this.allSelected = event.checked;
  //   this.envanterData.forEach(item => item.selected = this.allSelected);
  // }
  // getSelectedItems(): Envanter[] 
  // {
  //   return this.envanterData.filter(item => item.selected);
  // }

}
