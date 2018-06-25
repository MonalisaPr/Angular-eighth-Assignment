import { Component, Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Pipe({name: 'reverse'})
  export class AppComponent implements PipeTransform {
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });
  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  filteredStatus = '';
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'New Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    });
  }
  transform(input: any): any {
    if (isString(input)) {
      return input.split('').reverse().join('');
    }

    return Array.isArray(input)
      ? input.slice().reverse()
      : input;
  }
  onSearchServer() {
    this.servers.find({
      instanceType: 'instanceType',
      name: 'New Server',
      status: 'stable',
      started: new Date(15, 1, 2017) 
    });
  }
}
