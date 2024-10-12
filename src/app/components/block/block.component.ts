import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [CommonModule, NoteComponent],
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss',
})
export class BlockComponent {}
