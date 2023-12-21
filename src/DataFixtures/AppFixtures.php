<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Article;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $article = new Article();
        $article->setTitre("Premier Article");
        $article->setTexte("Lorem Ipsum");
        $manager->persist($article);

        $article = new Article();
        $article->setTitre("Second Article");
        $article->setTexte("Lorem Ipsum");
        $manager->persist($article);

        $manager->flush();
    }
}
