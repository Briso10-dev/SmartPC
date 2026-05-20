import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pc } from '../models/pc.model';
import { UserProfile } from '../models/user-profile.model';
import { SelectionService } from '../services/selection.service';

@Component({
  selector: 'app-resultat',
  standalone: false,
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
  public profile!: UserProfile;
  public mode: string = 'guided';
  public resultats: Pc[] = [];
  public pcSelectionne: Pc | null = null;
  public explication: string = '';

  public constructor(private router: Router, private selectionService: SelectionService) {}

  public ngOnInit(): void {
    const state = this.router.getCurrentNavigation()?.extras.state ?? history.state;

    this.profile = state?.profile ?? {
      usage: 'bureautique',
      budget: 1000,
      mobilite: 'moyenne',
      logiciels: []
    };

    this.mode = state?.mode ?? 'guided';

    this.resultats = this.selectionService.selectionner(this.profile);
  }

  public afficherDetail(pc: Pc): void {
    this.pcSelectionne = pc;
    this.explication = this.selectionService.genererExplication(pc, this.profile);
  }

  public retourListe(): void {
    this.pcSelectionne = null;
    this.explication = '';
  }
}