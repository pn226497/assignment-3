import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html'
})
export class AlbumComponent {
  albumId: string | null | undefined;
  albums: any;
  tracks: any;
  
  
  constructor(private _activatedRoute:ActivatedRoute, private _spotifyService:SpotifyService){ 

    _activatedRoute.paramMap.subscribe((param: ParamMap) =>{
      this.albumId = param.get('id');
    });

    _spotifyService.getAlbum(this.albumId).subscribe((data: any) => {
      this.albums = data
    });

    _spotifyService.getAllTracks(this.albumId).subscribe(data => {
      this.tracks = data.items;
     console.log(this.tracks);
    })
  }


  
}
