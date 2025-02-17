-- MySQL dump 10.13  Distrib 8.0.41, for Linux (x86_64)
--
-- Host: localhost    Database: gamecurate
-- ------------------------------------------------------
-- Server version	8.0.41-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
    `id` bigint unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
    `description` text COLLATE utf8mb4_general_ci NOT NULL,
    `genre` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
    `price` decimal(5,2) NOT NULL,
    `review` int NOT NULL,
    `image_path` text COLLATE utf8mb4_general_ci NOT NULL,
    PRIMARY KEY (`id`),
    CHECK `price` between 1 and 100,
    CHECK `review` between 1 and 100
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'The Witcher 3: Wild Hunt','An expansive RPG masterpiece that follows monster hunter Geralt of Rivia through a war-torn medieval fantasy world. Featuring morally complex storytelling, richly detailed side quests, and a dynamic combat system that blends swordplay with magical abilities, the game offers hundreds of hours of compelling content across its vast open world.','Open-World Rpg',59.99,93,'/assets/img/games/the-witcher-3-wild-hunt.jpeg'),(2,'Red Dead Redemption 2','A masterfully crafted Western epic set in 1899 that follows outlaw Arthur Morgan\'s journey through America\'s dying frontier. The game combines incredible attention to historical detail, a living, breathing world with dynamic interactions, and a powerful narrative about loyalty, redemption, and the cost of the American Dream.','Open-World',49.99,96,'/assets/img/games/red-dead-redemption-2.jpeg'),(3,'God of War','A breathtaking reinvention of the classic series that transforms Kratos from a vengeful Greek god into a troubled father in the Norse realm. The game masterfully weaves intimate character drama with epic mythology, featuring revolutionary one-shot cinematography and visceral combat that never breaks from its emotional core.','Action Adventure',39.99,94,'/assets/img/games/god-of-war.jpeg'),(4,'Horizon Forbidden West','A stunning post-apocalyptic adventure that follows huntress Aloy as she explores a beautifully realized world where nature has reclaimed civilization. The game combines thrilling combat against robotic creatures with deep mysteries about humanity\'s past, featuring cutting-edge graphics and an innovative blend of primitive and futuristic technologies.','Open-World',44.99,88,'/assets/img/games/horizon-forbidden-west.jpeg'),(5,'Spider-Man: Miles Morales','An energetic and heartfelt spin-off that puts players in the shoes of the young Spider-Man Miles Morales as he protects his Harlem neighborhood during winter in New York City. The game combines fluid web-swinging mechanics with stylish combat and a touching story about family, responsibility, and finding your own path as a hero.','Action',39.99,85,'/assets/img/games/spider-man-miles-morales.jpeg'),(6,'Sekiro: Shadows Die Twice','A precisely crafted action game set in a dark fantasy version of feudal Japan, where players take on the role of a shinobi seeking revenge and redemption. The game revolutionizes combat with its unique posture system and demanding swordplay, requiring perfect timing and strategy while exploring a world rich with Japanese mythology and architecture.','Action',34.99,90,'/assets/img/games/sekiro-shadows-die-twice.jpeg'),(7,'Resident Evil Village','A haunting continuation of the survival horror series that follows Ethan Winters\' desperate search for his daughter in a mysterious European village. The game masterfully blends Gothic horror with action elements, featuring a memorable cast of grotesque villains, tense resource management, and a perfect balance of terror and empowerment.','Action Horror',29.99,84,'/assets/img/games/resident-evil-village.jpeg'),(8,'Cyberpunk 2077','An ambitious open-world RPG set in the sprawling Night City, where players navigate a neon-soaked metropolis as V, a mercenary caught in a life-altering conspiracy. The game offers unprecedented urban density, deep character customization, and branching narratives that explore themes of transhumanism, corporate power, and personal identity.','Open-World Rpg',49.99,76,'/assets/img/games/cyberpunk-2077.jpeg'),(9,'Ghost of Tsushima','A visually stunning open-world adventure that follows samurai Jin Sakai during the first Mongol invasion of Japan. The game perfectly captures the essence of classic samurai films with its cinematic presentation, while offering players the choice between honorable combat and shadowy stealth in a breathtaking recreation of feudal Tsushima.','Open-world',59.99,84,'/assets/img/games/ghost-of-tsushima.jpeg'),(10,'Death Stranding','A boldly unique experience from Hideo Kojima that casts players as Sam Porter Bridges, a courier traversing a post-apocalyptic America to reconnect isolated communities. The game challenges conventional gameplay with its focus on traversal mechanics and asynchronous multiplayer, while weaving a complex narrative about human connection in an age of isolation.','Immersive-Sim',29.99,83,'/assets/img/games/death-stranding.jpeg'),(11,'Control','A mind-bending action-adventure set in a shape-shifting government facility known as the Oldest House. Players step into the role of Jesse Faden, the new director of a secret agency, wielding supernatural abilities and transforming weapons while uncovering the mysteries of paranatural phenomena and alternate dimensions.','Action Adventure',39.99,84,'/assets/img/games/control.jpeg'),(12,'Doom Eternal','An adrenaline-fueled sequel that elevates the legendary shooter series with lightning-fast combat and strategic depth. Players become the Doom Slayer, fighting through hordes of demons with an expanded arsenal and newfound mobility, while managing resources in a delicate \'combat dance\' that rewards aggression and tactical thinking.','Shooter',59.99,89,'/assets/img/games/doom-eternal.jpeg'),(13,'Final Fantasy VII Remake','A stunning reimagining of the beloved 1997 classic that expands the city of Midgar into a fully realized world. The game transforms the original\'s turn-based combat into an innovative action system while deeply developing its iconic characters, telling an intimate story of resistance against corporate power with modern production values.','Rpg',59.99,92,'/assets/img/games/final-fantasy-vii-remake.jpeg'),(14,'Animal Crossing: New Horizons','A charming life simulation that became a global phenomenon, offering players the ability to create their perfect island paradise. The game\'s gentle pace, endless customization options, and real-time gameplay create a peaceful escape where players can express creativity, build relationships with quirky animal villagers, and share experiences with friends.','Simulation',49.99,90,'/assets/img/games/animal-crossing-new-horizons.jpeg'),(15,'Ori and the Will of the Wisps','A breathtaking metroidvania that combines fluid platforming with emotional storytelling. The game follows spirit guardian Ori through a hand-painted world of wonder and danger, featuring precise controls, challenging combat, and a haunting orchestral score that perfectly complements its themes of hope, sacrifice, and belonging.','Platformer',19.99,90,'/assets/img/games/ori-and-the-will-of-the-wisps.jpeg'),(16,'Forza Horizon 5','An outstanding racing game set in a vibrant recreation of Mexico, offering unprecedented freedom in how players approach driving excitement. The game features hundreds of meticulously detailed vehicles, dynamic weather systems, and endless activities from street racing to off-road expeditions, all while fostering a welcoming community of car enthusiasts.','Racing',69.99,92,'/assets/img/games/forza-horizon-5.jpeg'),(17,'Elden Ring','A monumental open-world action RPG created through the collaboration of FromSoftware and George R.R. Martin. The game transports players to the Lands Between, a vast realm shattered by the shattering of the Elden Ring, where they\'ll face challenging combat, discover rich lore, and forge their own path through an intricately designed world filled with endless discoveries and fearsome enemies.','Open-World Rpg',59.99,95,'/assets/img/games/elden-ring.jpeg'),(18,'Dark Souls 3','A brutal and atmospheric action-RPG that challenges players to survive in a dark fantasy realm of fallen kingdoms. As the Ashen One, you\'ll master precise combat mechanics, face towering bosses, and uncover cryptic lore while exploring interconnected Gothic environments filled with deadly enemies and hidden secrets.','Action Rpg',59.99,90,'/assets/img/games/dark-souls-3.jpeg'),(19,'Hades','A masterfully crafted roguelike that follows Zagreus, son of Hades, in his attempts to escape the Underworld. The game brilliantly weaves Greek mythology with fast-paced combat and innovative storytelling that unfolds across multiple runs, featuring gorgeous art, memorable characters, and an addictive progression system that keeps players coming back for more.','Roguelike',24.99,93,'/assets/img/games/hades.jpeg'),(20,'Persona 5 Royal','An enhanced version of the acclaimed JRPG that follows a group of high school students who moonlight as phantom thieves in modern-day Tokyo. The game combines stylish turn-based combat with deep social simulation elements, featuring a compelling story about rebellion against corruption, all set to an unforgettable jazz-inspired soundtrack.','Rpg',59.99,95,'/assets/img/games/persona-5-royal.jpeg'),(21,'Deathloop','An innovative first-person shooter that traps players in a time loop on the mysterious island of Blackreef. The game combines Arkane\'s signature immersive sim gameplay with a clever puzzle structure, as players piece together information across multiple loops to eliminate eight targets in a single perfect day.','Immersive-Sim',59.99,88,'/assets/img/games/deathloop.jpeg'),(22,'It Takes Two','A groundbreaking cooperative adventure that follows a divorcing couple transformed into dolls by their daughter\'s tears. The game constantly introduces new mechanics and gameplay styles across its journey, telling a touching story about love and relationships while requiring two players to work together in innovative ways.','Co-op',39.99,89,'/assets/img/games/it-takes-two.jpeg'),(23,'Ratchet & Clank: Rift Apart','A technically stunning action platformer that showcases the PS5\'s capabilities through dimensional rifts and instant loading. The game follows the iconic duo and new character Rivet across multiple dimensions, featuring gorgeous visuals, creative weapons, and heartfelt storytelling that welcomes both newcomers and series veterans.','Action Platformer',69.99,88,'/assets/img/games/ratchet-and-clank-rift-apart.jpeg'),(24,'Demon\'s Souls','A ground-up remake of the seminal action RPG that launched the Souls-like genre. The PS5 exclusive rebuilds the mysterious kingdom of Boletaria with stunning visual fidelity while maintaining the precise combat and haunting atmosphere that made the original a classic.','Rpg',69.99,92,'/assets/img/games/demons-souls.jpeg'),(25,'Disco Elysium','A revolutionary RPG that reimagines the genre through the lens of a detective story. Players navigate a unique world as an amnesiac detective, with gameplay focused entirely on dialogue and skill checks, featuring unprecedented narrative depth and philosophical complexity in its exploration of politics, identity, and human nature.','Rpg',39.99,91,'/assets/img/games/disco-elysium.jpeg'),(26,'Returnal','Break the cycle as this award-winning third-person shooter brings bullet hell action to PC. Selene’s roguelike odyssey arrives with a suite of arresting graphical and performance-based enhancements to ensure an unforgettable journey.','Roguelike',19.99,88,'/assets/img/games/returnal.jpeg'),(27,'Kingdom Come Deliverance 2','A thrilling story-driven action RPG, with a rich open world, set in 15th century Medieval Europe. Experience the ultimate medieval adventure - through the eyes of young Henry - as you embark on a journey of epic proportions. ... ','Rpg',59.99,90,'/assets/img/games/kingdom-come-deliverance-2.jpeg'),(28,'Fallout 76','An ambitious but troubled multiplayer take on the Fallout series that places players in a shared post-apocalyptic West Virginia. Despite offering a vast open world to explore with friends, the game launched with numerous technical issues, sparse NPCs, and controversial design decisions, though subsequent updates have addressed some initial criticisms.','Rpg',39.99,52,'/assets/img/games/fallout-76.jpeg'),(29,'Balan Wonderworld','A colorful 3D platformer from the original creators of Sonic the Hedgehog that follows two children through a whimsical theater realm. Despite its promising creative pedigree, the game struggles with repetitive gameplay, confusing design choices, and an overcomplicated costume system that fails to capture the magic of classic platformers.','Platformer',29.99,44,'/assets/img/games/balan-wonderworld.jpeg'),(30,'Fallout New Vegas','Welcome to Vegas. New Vegas.\r\nIt’s the kind of town where you dig your own grave prior to being shot in the head and left for dead…and that’s before things really get ugly. It’s a town of dreamers and desperados being torn apart by warring factions vying for complete control of this desert oasis. It’s a place where the right kind of person with the right kind of weaponry can really make a name for themselves, and make more than an enemy or two along the way.','Rpg',9.99,84,'/assets/img/games/fallout-new-vegas.jpeg');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(60) COLLATE utf8mb4_general_ci NOT NULL,
  `remember_token` varchar(64) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'root','root@gmail.com','$2y$10$lB1TpPdtQNw4Oq4oyjjD6uab9h.Nl7DOgshHYb92U2vueQUm/NAMi','ce0436a2ff2bb2ff625fe48750dd0e6f1dd1c654041b70a6b270348e8ad8ddc0'),(2,'test','test@gmail.com','$2y$10$VpKEU7FLJYZMp0C57/xKj.N.XOSU92JKHQNyu44F/sjUdd87gSSla',NULL),(3,'azertyazertyazerty','azerty@gmail.com','$2y$10$6o3GKEhPVpp8vhYzUDrnUujAf3Ky6Ww9dY9i2p8Xw9OwDfFYLEDGe',NULL),(5,'testtesttttest','test56@gmail.com','$2y$10$97kDCAy5vZJ2YviSZoVnieM6XH/nSIb7yU7f48JzQvVZ7xZJ3Q/Uy',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-17 12:46:08
