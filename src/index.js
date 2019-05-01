"use strict";

import Stack from './stack/Stack.js';
import LinkedList from './linked-list/LinkedList.js';
import Graph from './graph/Graph.js';
import GraphOld from './graph/GraphOld.js';


const nav = new GraphOld("Unilag"); //Create new nav

nav.addNode('1st Gate'); //1st Gate
nav.addNode('Chapel'); //Church/Mosque
nav.addNode('Faculty of Education'); //Education
nav.addNode('Amina/Kofo/Biobaku'); //Newest Hall
nav.addNode('New Hall'); //New Hall
nav.addNode('ISL/DLI'); //ISL
nav.addNode('Health Center'); //Health Center
nav.addNode('Moremi Car Park'); //Moremi Car Park
nav.addNode('Senate Building'); //Senate Building
nav.addNode('Jaja'); //Jaja
nav.addNode('Ozolua'); //Ozolua
nav.addNode('Faculty of Sciences'); //Sciences
nav.addNode('Library'); //Library
nav.addNode('Highrise'); //Highrise

nav.addEdge('1st Gate', 'Chapel', 2);
nav.addEdge('1st Gate', 'Faculty of Education', 1);

nav.addEdge('Chapel', 'New Hall', 1);
nav.addEdge('Chapel', 'ISL/DLI', 4);

nav.addEdge('Faculty of Education', 'Amina/Kofo/Biobaku', 1);

nav.addEdge('Amina/Kofo/Biobaku', 'ISL/DLI', 2);

nav.addEdge('New Hall', 'ISL/DLI', 4);
nav.addEdge('New Hall', 'Health Center', 3);
nav.addEdge('New Hall', 'Moremi Car Park', 2);
nav.addEdge('New Hall', 'Senate Building', 3);

nav.addEdge('ISL/DLI', 'Health Center', 1);
nav.addEdge('ISL/DLI', 'Jaja', 2);
nav.addEdge('ISL/DLI', 'Ozolua', 3);

nav.addEdge('Health Center', 'Jaja', 1);

nav.addEdge('Moremi Car Park', 'Senate Building', 2);
nav.addEdge('Moremi Car Park', 'Jaja', 1);

nav.addEdge('Senate Building', 'Jaja', 3);
nav.addEdge('Senate Building', 'Library', 1);

nav.addEdge('Jaja', 'Ozolua', 2);
nav.addEdge('Jaja', 'Faculty of Sciences', 1);
nav.addEdge('Jaja', 'Library', 2);

nav.addEdge('Ozolua', 'Highrise', 2);

nav.addEdge('Faculty of Sciences', 'Library', 2);

nav.dijsktra('1st Gate');