import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholder {
  private readonly _httpCliente = inject(HttpClient);

  getPosts():any{
    return this._httpCliente.get("https://jsonplaceholder.typicode.com/posts",
      {observe:'response'}
    )
    .subscribe((res)=>{
      console.log(res.body);
    })
  }
}
