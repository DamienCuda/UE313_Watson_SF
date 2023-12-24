<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\LinkRepository;

class HomeController extends AbstractController
{
    #[Route('/home', name: 'app_home')]
    public function index(LinkRepository $linkRepository): Response
    {
        $links = $linkRepository->findBy([], null, 10);

        return $this->render('home/index.html.twig', [
            'links' => $links,
        ]);
    }
}



