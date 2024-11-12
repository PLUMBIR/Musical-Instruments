import { Component } from '@angular/core';
import { SideNavComponent } from "../side-nav/side-nav.component";
import { SideNavBuypageComponent } from '../side-nav-buypage/side-nav-buypage.component';
import { CardComponent } from "../card/card.component";
import { GuitarModel } from '../../models/guitarModel';

@Component({
  selector: 'app-buypage-content',
  standalone: true,
  imports: [SideNavBuypageComponent, CardComponent],
  templateUrl: './buypage-content.component.html',
  styleUrl: './buypage-content.component.scss'
})

export class BuypageContentComponent {
  readonly cardsList: GuitarModel[] = [
    {
        name: "Fender Stratocaster",
        photo: "https://musicmarket.by/images/ab__webp/thumbnails/240/240/detailed/1065/flight-nuc-310-1_jpg.webp",
        review: "5 (Отзывов: 22)",
        amount: "В наличии на складе магазина",
        price: "222.80 Br"
    },
    {
        name: "Gibson Les Paul",
        photo: "https://musicmarket.by/images/ab__webp/thumbnails/240/240/detailed/1017/AC100-OP-main-cort_jpg.webp",
        review: "4 (Отзывов: 12)",
        amount: "В наличии магазина",
        price: "111.80 Br"
    },
    {
        name: "Ibanez RG",
        photo: "https://musicmarket.by/images/ab__webp/thumbnails/240/240/detailed/1028/IBANRGMS8-BKb_jpg.webp",
        review: "5 (Отзывов: 18)",
        amount: "В наличии на складе магазина",
        price: "322.00 Br"
    },
    {
        name: "PRS Custom 24",
        photo: "https://musicmarket.by/images/ab__webp/thumbnails/240/240/detailed/1028/Ibanez_8_png.webp",
        review: "3 (Отзывов: 11)",
        amount: "В наличии на складе магазина",
        price: "532.60 Br"
    },
    {
        name: "Yamaha Pacifica",
        photo: "https://musicmarket.by/images/ab__webp/thumbnails/240/240/detailed/1082/fante-ft-r38b-bls_jpg.webp",
        review: "2 (Отзывов: 3)",
        amount: "В наличии на складе магазина",
        price: "254.30 Br"
    },
    {
        name: "Jackson Dinky",
        photo: "https://musicmarket.by/images/ab__webp/thumbnails/240/240/detailed/1032/flight-f-230c-wr_jpg.webp",
        review: "3 (Отзывов: 22)",
        amount: "В наличии магазина",
        price: "423.30 Br"
    },
    {
        name: "ESP Eclipse",
        photo: "https://musicmarket.by/images/ab__webp/thumbnails/240/240/detailed/1089/flight-tus-35-pk_1_jpg.webp",
        review: "5 (Отзывов: 15)",
        amount: "В наличии магазина",
        price: "123.80 Br"
    },
    {
        name: "Schecter Hellraiser",
        photo: "https://musicmarket.by/images/ab__webp/thumbnails/240/240/detailed/1037/7-3_png.webp",
        review: "5 (Отзывов: 7)",
        amount: "В наличии магазина",
        price: "323.80 Br"
    },
    {
        name: "Gretsch White Falcon",
        photo: "https://musicmarket.by/images/ab__webp/thumbnails/240/240/detailed/1028/Ibanex_png.webp",
        review: "5 (Отзывов: 36)",
        amount: "В наличии магазина",
        price: "421.80 Br"
    },
    {
        name: "Rickenbacker 330",
        photo: "https://musicmarket.by/images/ab__webp/thumbnails/240/240/detailed/1035/listen_lis100-red_jpg.webp",
        review: "4.8 (Отзывов: 14)",
        amount: "В наличии магазина",
        price: "645.80 Br"
    }
  ];
}
