import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-movie-modal',
  templateUrl: './add-movie-modal.component.html',
  styleUrls: ['./add-movie-modal.component.scss'],
})
export class AddMovieModalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}
  @ViewChild('f', { static: true }) form!: NgForm;

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss();
  }

  onAddMovie() {
    if (!this.form.valid) {
      return;
    }

    this.modalCtrl.dismiss(
      {
        movieData: {
          title: this.form.value['title'],
          releaseYear: this.form.value['releaseYear'],
          genre: this.form.value['genre'],
          director: this.form.value['director'],
          cast: this.form.value['cast'],
          description: this.form.value['description'],
          imageUrl: this.form.value['imageUrl'],
          coverUrl: this.form.value['coverUrl']
        },
      },
      'confirm'
    );
  }
}
