import { Component } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  title = 'player';
  artists: Array<any>=[];
  search!: string;
  
  constructor(private spotifyService:SpotifyService) { this.loadData() }
  loadData() {
    this.spotifyService.getAllArtists(this.search).subscribe(
      data => this.artists = data.artists.items
    )
  }
}
