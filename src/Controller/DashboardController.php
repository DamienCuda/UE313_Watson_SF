<?php

// src/Controller/DashboardController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\LinkRepository;
use App\Repository\UserRepository;

class DashboardController extends AbstractController
{
    #[Route('/dashboard', name: 'app_dashboard')]
    public function index(LinkRepository $linkRepository, UserRepository $userRepository): Response
    {
        $links = $linkRepository->findBy([], null, 10); 
        $users = $userRepository->findBy([], null, 10); 

        return $this->render('dashboard/index.html.twig', [
            'links' => $links,
            'users' => $users,
        ]);
    }
}



