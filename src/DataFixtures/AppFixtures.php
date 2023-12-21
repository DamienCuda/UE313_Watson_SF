<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Article;
use App\Entity\Link;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {

    // Liste de liens généré par Bard pour accélérer le processus de peuplement de la bdd
    $liens = [
                [
                    "titre" => "Le Monde Informatique",
                    "url" => "https://www.lemondeinformatique.fr/",
                    "description" => "Un site d'actualités informatiques français",
                ],
                [
                    "titre" => "ZDNet",
                    "url" => "https://www.zdnet.fr/",
                    "description" => "Un site d'actualités informatiques américain",
                ],
                [
                    "titre" => "ITespresso",
                    "url" => "https://www.itespresso.fr/",
                    "description" => "Un site d'actualités informatiques italien",
                ],
                [
                    "titre" => "MacRumors",
                    "url" => "https://www.macrumors.com/",
                    "description" => "Un site d'actualités sur Apple",
                ],
                [
                    "titre" => "Android Police",
                    "url" => "https://www.androidpolice.com/",
                    "description" => "Un site d'actualités sur Android",
                ],
                [
                    "titre" => "The Verge",
                    "url" => "https://www.theverge.com/",
                    "description" => "Un site d'actualités technologiques américain",
                ],
                [
                    "titre" => "Engadget",
                    "url" => "https://www.engadget.com/",
                    "description" => "Un site d'actualités technologiques américain",
                ],
                [
                    "titre" => "TechCrunch",
                    "url" => "https://techcrunch.com/",
                    "description" => "Un site d'actualités technologiques américain",
                ],
                [
                    "titre" => "9to5Mac",
                    "url" => "https://9to5mac.com/",
                    "description" => "Un site d'actualités sur Apple",
                ],
                [
                    "titre" => "9to5Google",
                    "url" => "https://9to5google.com/",
                    "description" => "Un site d'actualités sur Google",
                ],
                [
                    "titre" => "iMore",
                    "url" => "https://www.imore.com/",
                    "description" => "Un site d'actualités sur Apple",
                ],
                [
                    "titre" => "SlashGear",
                    "url" => "https://www.slashgear.com/",
                    "description" => "Un site d'actualités technologiques américain",
                ],
                [
                    "titre" => "The Register",
                    "url" => "https://www.theregister.com/",
                    "description" => "Un site d'actualités technologiques britannique",
                ],
                [
                    "titre" => "Gizmodo",
                    "url" => "https://www.gizmodo.com/",
                    "description" => "Un site d'actualités technologiques américain",
                ],
                [
                    "titre" => "Engadget",
                    "url" => "https://www.engadget.com/",
                    "description" => "Un site d'actualités technologiques américain",
                ],
                [
                    "titre" => "TechCrunch",
                    "url" => "https://techcrunch.com/",
                    "description" => "Un site d'actualités technologiques américain",
                ],
                [
                    "titre" => "CNET",
                    "url" => "https://www.cnet.com/",
                    "description" => "Un site d'actualités technologiques américain",
                ],
                [
                    "titre" => "Ars Technica",
                    "url" => "https://arstechnica.com/",
                    "description" => "Un site d'actualités technologiques américain",
                ],
                [
                    "titre" => "Wired",
                    "url" => "https://www.wired.com/",
                    "description" => "Un site d'actualités technologiques américain",
                ]
    ];

    foreach($liens as $item){
        $lien = new Link();
        $lien->setTitre($item['titre']);
        $lien->setUrl($item['url']);
        $lien->setDecription($item['description']);
        $manager->persist($lien);
    }

        $manager->flush();
    }
}
