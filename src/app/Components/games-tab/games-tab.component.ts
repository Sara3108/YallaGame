import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games-tab',
  templateUrl: './games-tab.component.html',
  styleUrls: ['./games-tab.component.css']
})
export class GamesTabComponent implements OnInit {

  placeId: number;
  games: any[];
  loading: boolean;
  constructor(private route:ActivatedRoute, private service:GamesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      this.placeId=+ param.get('placeId');
      })

      this.service.getAllGames(this.placeId).subscribe(res=>{
        this.games=res as any[];
        console.log(this.games);
      })
    
  }

}
