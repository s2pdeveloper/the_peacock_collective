import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remote-page',
  templateUrl: './remote-page.component.html',
  styleUrls: ['./remote-page.component.scss'],
})
export class RemotePageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  initialData: any = {};
  data: any[] = [
    {
      catName:'What’s New',
      pageName: 'Latest Collection',
      description:
        'I am enamored by details that most people often miss. The twinkle in one’s eyes and the way they smile. The perfection in imperfect pleats, and the graceful movement of the pallu. The fragrance of an old book and the memories it drives. These tiny details that really make your heart smile. I try to bring those through my collection that will always be proudly Made in India.',
    },
    {
      catName:'What’s New',
      pageName: 'Sale',
      description: null,
    },
    {
      catName:'What’s New',
      pageName: "What's in Vogue",
      description:
        'I love Indian design stories. The India we grew up to love is artisanal, authentic and audacious. I always wanted to create a brand that reflects the true spirit of India - the polkis of Jaipur, pearls from Lucknow, silks from Banaras, and the craftsmanship of Bengal, pashminas of Kashmir and true to my own belonging - the paithanis of Maharashtra.  By creating a converging point of all of these aesthetics and giving it our own twist, this brand emerged into being an extension of us',
    },
    {
      catName:'LOOK BOOKS',
      pageName: 'Everyday Chic',
      description:
        "\"Everyday Chic\" embodies the essence of effortless sophistication and contemporary flair. It's a celebration of versatility and comfort intertwined with elegance. This lookbook embraces the fusion of traditional Indian craftsmanship with modern silhouettes. It's about seamlessly transitioning from day to night with confidence and grace, whether it's through the subtle drapes of a saree or the structured elegance of a kurta. Accessories play a vital role, with statement jewelry and sleek handbags adding the perfect finishing touch to elevate any ensemble. With a focus on quality fabrics, impeccable tailoring, and attention to detail, everyday chic captures the essence of contemporary Indian style, empowering individuals to exude effortless sophistication in every aspect of their daily lives.",
    },
    {
      catName:'LOOK BOOKS',
      pageName: 'Globally Indian',
      description:
        '"Globally Indian," is our take on a dynamic fusion of traditional Indian fashion sensibilities with global trends, redefining the boundaries of contemporary style. This innovative concept seamlessly marries the rich heritage of Indian textiles, motifs, and craftsmanship with the versatility of modern fashion. Imagine pairing a vibrant Banarasi silk saree with a tailored blazer or draping a hand-embroidered organza dupatta over a little black dress – these juxtapositions effortlessly blend cultures, creating a unique and captivating aesthetic. From intricately embellished ethnic wear styled with Western accessories to statement-making Indian-inspired prints adorning chic outerwear and bags, "Globally Indian" encapsulates the spirit of cultural diversity and sartorial innovation. Embracing this trend means embracing individuality and creativity, allowing one to express their unique identity through fashion that transcends borders.',
    },
    {
      catName:'LOOK BOOKS',
      pageName: 'Be my Guest',
      description:
        '"Be My Guest," is the ultimate guide to ensure that you make a captivating entrance at every celebration. This lookbook celebrates the art of dressing for the occasion, offering a curated selection of outfits that perfectly balance tradition with contemporary flair. From vibrant hues to pastel palettes, "Be My Guest" showcases a spectrum of colors that reflect the joyous spirit of Indian weddings and parties, ensuring you stand out amidst the festivities. Whether you opt for a timeless saree with a modern twist or a chic fusion ensemble that merges traditional silhouettes with global trends, our collection promises to elevate your style quotient and leave a lasting impression. Complete your look with statement jewelry, and you\'re ready to charm your way through every celebration. Embrace the joy of wedding season in style, as you celebrate love, culture, and the timeless allure of Indian fashion.',
    },
    {
      catName:'LOOK BOOKS',
      pageName: 'All about the Glam!',
      description:
        'Introducing "All About the Glam!", where glamor takes center stage and sophistication meets extravagance in every ensemble. This opulent lookbook is a celebration of modern luxury and timeless elegance, inspired by celebrity and designer trends that set the fashion world ablaze. Of sequin sarees paired with timeless jewelry pieces, or a regal Banarasi sarees, meticulously handcrafted with exquisite borders that exude heritage charm, this curation will make your sparkle like a star. Our bespoke collection elevates glamor, offering couture pieces that are as unique, ensuring you steal the spotlight at any event. Embrace the extravagance of luxury fashion and unleash your inner diva as you indulge in the finer things in life. Whether you\'re attending a red carpet event or a high-profile soirée, our curated collection promises to make you feel like the star of the show, leaving a lasting impression wherever you go.',
    },
    {
      catName:'LOOK BOOKS',
      pageName: 'Let’s get to work',
      description:
        '"Let\'s Get to Work," is inspired by the modern Indian woman. I grew up watchin….where style meets professionalism in the most exquisite manner. This unique lookbook is dedicated to elevating your work wardrobe with the finest selection of Indian fashion pieces, meticulously curated to blend comfort with impeccable style. Picture yourself stepping into the office draped in the timeless elegance of an Ajrakh saree, its intricate patterns and earthy tones reflecting both heritage and sophistication. Or perhaps you prefer the versatility of a well-designed kurta set, offering the perfect balance of comfort and refinement as you navigate through your busy workday with ease. Our collection celebrates the art of dressing for success, offering tailored pieces that exude confidence and professionalism without compromising on style. From chic silhouettes to luxurious fabrics, each ensemble is thoughtfully crafted to empower you to make a statement in the boardroom and beyond. Embrace the power of Indian fashion to command attention and inspire confidence as you embark on your professional journey. With "Let\'s Get to Work," redefine workwear as a fusion of functionality and flair, where every outfit is a testament to your impeccable taste and unwavering determination to succeed.',
    },
  ];
  products: any[] = [
    {
      img: '../../../../assets/products/sari/sari1.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari2.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari3.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari4.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari5.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari6.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari7.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari8.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari8.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari9.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari10.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari11.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari12.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari13.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari14.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari15.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari16.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari17.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari18.jpeg',
    },
  ];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.initialData = this.data.find((x) => x.pageName == params?.id);
    });
  }
}
