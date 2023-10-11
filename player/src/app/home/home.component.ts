import { Component } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  artists: Array<any>=[];
  search!: string;
  
  constructor(private spotifyService:SpotifyService) { this.loadData() }
  loadData() {
    this.spotifyService.getAllArtists(this.search).subscribe(
      data => this.artists = data.artists.items
    )
  }
}
