import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer BQCQYY7pBqpfwrkrGXESNBJVp-WyDZy-Qu7i6PXnJKtSXCQW_g2C9aYALF6jkSSHM9_RXlExFgkqbtJIkML81XbBWEXwZhKe9abmGR_YEWsK-Sdj5VdH"
  })
  }
  

  getAllArtists(search:string) {
    return this.http.get<any>(`https://api.spotify.com/v1/search?q=${search}&type=artist`, this.httpOptions)
  }
  getArtists(artistId: any) :Observable<any> {
    return this.http.get<any>(`https://api.spotify.com/v1/artists/${artistId}`, this.httpOptions);
  }
  getAllAlbums(artistId: any) :Observable<any> {
    return this.http.get<any>(`https://api.spotify.com/v1/artists/${artistId}/albums`, this.httpOptions);
  }
  getAlbum(albumId: any): Observable<any> {
    return this.http.get<any>(`https://api.spotify.com/v1/albums/${albumId}`, this.httpOptions);
  }
  getAllTracks(albumId: any): Observable<any> {
    return this.http.get<any>(`https://api.spotify.com/v1/albums/${albumId}/tracks`, this.httpOptions);
  }
  getAllShows(showId: any): Observable<any> {
    return this.http.get<any>(`https://api.spotify.com/v1/shows/${showId}`, this.httpOptions);
  }
}
