import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repo } from '../repo';


@Injectable({
  providedIn: 'root'
})
export class GitUserService {
 

  user: User;
 repo:Repo
  userName: string = "";
  fullURL: string;
  repoUrl: string;

  generateURL:string;

  
  gitApiUrl: string = "http://api.github.com/users/";
  username:string = "jimmy-oss";
  apiKey:any = "d159b220b68555f012a7225b56518b449e92429e";
    

  constructor(private http: HttpClient) {
    
  }
  

  profileSearch(search){
  
    let userPromise = new Promise<User>((resolve,reject)=>{
      this.http.get<User>(this.gitApiUrl+search+"?access_token="+ this.apiKey).toPromise().then( 
        (success) =>{
          this.user=success
          console.log(success)
          resolve()
        },
       (error) =>{
         console.log(error)

         reject()
       })
    
        
    })
    return userPromise;
  
}

  getRepo(search: string){
    let promise = new Promise<Repo>((resolve, reject) =>{
        
          this.http.get<Repo>(this.gitApiUrl + search+'/repos?'+"?access_token="+this.apiKey).toPromise().then(
    (result) => {
    this.repo = result
    console.log(result)
    resolve()
    },
    (error) => {
    reject()
    }
    )
    })
    return promise
    }   }