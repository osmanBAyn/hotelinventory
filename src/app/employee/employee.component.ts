import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  constructor(private configService:ConfigService) { }
}
