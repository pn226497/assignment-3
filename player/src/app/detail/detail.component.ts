import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  artistId:string | null | undefined
  artist: any;
   albums: any;
  constructor(private _activatedRoute:ActivatedRoute, private _spotifyService:SpotifyService){ 
   _activatedRoute.paramMap.subscribe((param: ParamMap) =>{
     this.artistId = param.get('id');
   });
   _spotifyService.getArtists(this.artistId).subscribe((data: any) => {
     this.artist = data
   })
   _spotifyService.getAllAlbums(this.artistId ).subscribe(data => {
     this.albums = data.items
     console.log(this.albums);
     
   })
   }
}
