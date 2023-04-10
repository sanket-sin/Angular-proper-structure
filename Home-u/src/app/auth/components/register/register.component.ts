import { Component, OnInit } from '@angular/core';
import { LocalStorageEncryptService } from 'src/app/shared/services/local-storage-encrypt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private localStore: LocalStorageEncryptService) { }

  ngOnInit(): void {
  }

}
