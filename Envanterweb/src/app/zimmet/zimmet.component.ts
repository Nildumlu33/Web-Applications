import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Zimmet } from '../models/zimmet.model';

@Component({
  selector: 'envtr-zimmet',
  templateUrl: './zimmet.component.html'
})
export class ZimmetComponent implements OnInit {

  constructor(private http: HttpClient) { }

  searchValue: String = '';
  zimmetData: Zimmet[] = [];
  selectedzimmet: Zimmet = {};
  loading: boolean = true;

  dialogShow: boolean = false;
  dialogDeleteShow: boolean = false;

  isUpdate = false;


  dialogTitle: String = this.isUpdate ? "Zimmetlenen Kişiyi Düzenle" : "Zimmetlenen Kişiyi Ekle";

  loadData() {
    this.getzimmets().then((data) => {
      this.loading = false;
      this.zimmetData = data;
    });
  };

  ngOnInit(): void {
    //  this.getzimmets().then((data) => {
    //    this.loading = false;
    //  this.zimmetData = data;
    this.loadData();
    // });
  }


  getzimmets() {
    return this.http.get<any>('http://localhost:5109/Zimmet/getZimmetList')
      .toPromise()
      .then(res => {
        console.log(res);
        return res as Zimmet[];
      })
      .then(data => data);
  }

  openDialog() {
    this.dialogShow = true;
  }

  confirmDelete() {
    var url = "http://localhost:5109/zimmetSil?id=" + this.selectedzimmet.id;
    this.http.post<any>(url, null)
      .toPromise()
      .then(res => {

        if (res == true) { this.dialogDeleteShow = false; this.loadData(); }
        return res as Zimmet[];
      })
      .then(data => data);
  }
  zimmetKaydet() {
    if (this.isUpdate)
      this.http.post<any>('http://localhost:5109/Zimmet/zimmetGuncelle', this.selectedzimmet)
        .toPromise()
        .then(res => {

          if (res == true) { this.dialogShow = false; this.loadData(); }
          return res;
        })
        .then(data => data);

    else {
      this.http.post<any>('http://localhost:5109/Zimmet/zimmetEkle ', this.selectedzimmet)
        .toPromise()
        .then(res => {

          if (res == true) { this.dialogShow = false; this.loadData(); }
          return res;
        })
        .then(data => data);
    }
  }
}
