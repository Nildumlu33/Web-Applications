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

  ngOnInit(): void {
    this.getzimmets().then((data) => {
      this.loading = false;
      this.zimmetData = data;
    });
  }

  // getzimmets() {
  //   return this.http.get<any>('http://localhost:5109/getZimmetList')
  //     .toPromise()
  //     .then(res => res.data as Zimmet[])
  //     .then(data => data);
  // }
  getzimmets() {
    return this.http.get<any>('http://localhost:5109/getZimmetList')
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

  confirmDelete(){

  }
  zimmetKaydet() {
    this.http.post<any>('http://localhost:5109/zimmetEkle', this.selectedzimmet)
      .toPromise()
      .then(res => {

        if (res == true) { this.dialogShow = false; }
        return res as Zimmet[];
      })
      .then(data => data);
  }
}
