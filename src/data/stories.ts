import { Scenario } from '../types';

export const scenarios: Scenario[] = [
  {
    id: 'marine-biology',
    title: 'MARINE BIOLOGY',
    stories: [
      {
        id: 'coral-reefs',
        title: 'Coral Reefs Ecosystem',
        description: 'Discover the vibrant world of coral reefs - the rainforests of the sea. Learn about the delicate balance of life in these underwater cities and the threats they face.',
        image: '1',
        questions: [
          {
            id: 'q1',
            text: 'What percentage of marine life depends on coral reefs?',
            options: [
              {
                id: 'a1',
                text: '25%',
                isCorrect: true,
                feedback: 'Correct! Coral reefs support about 25% of all marine life despite covering less than 1% of the ocean floor.'
              },
              {
                id: 'a2',
                text: '10%',
                isCorrect: false,
                feedback: 'Incorrect. Coral reefs support much more marine life - about 25% of all marine species.'
              }
            ]
          },
          {
            id: 'q2',
            text: 'What causes coral bleaching?',
            options: [
              {
                id: 'b1',
                text: 'Rising water temperatures',
                isCorrect: true,
                feedback: 'Exactly! Rising water temperatures cause coral to expel their symbiotic algae, leading to bleaching.'
              },
              {
                id: 'b2',
                text: 'Too much sunlight',
                isCorrect: false,
                feedback: 'Not quite. While sunlight can contribute, the main cause is rising water temperatures from climate change.'
              }
            ]
          },
          {
            id: 'q3',
            text: 'How long can coral reefs live?',
            options: [
              {
                id: 'c1',
                text: 'Up to 5,000 years',
                isCorrect: true,
                feedback: 'Amazing! Some coral reefs have been growing for thousands of years, making them among the oldest living structures on Earth.'
              },
              {
                id: 'c2',
                text: 'Up to 100 years',
                isCorrect: false,
                feedback: 'Much longer! Coral reefs can live for thousands of years, with some dating back 5,000 years or more.'
              }
            ]
          },
          {
            id: 'q4',
            text: 'What is the Great Barrier Reef?',
            options: [
              {
                id: 'd1',
                text: 'The largest coral reef system in the world',
                isCorrect: true,
                feedback: 'Perfect! The Great Barrier Reef is the world\'s largest coral reef system, visible from space.'
              },
              {
                id: 'd2',
                text: 'A type of fish',
                isCorrect: false,
                feedback: 'No, it\'s not a fish. The Great Barrier Reef is the largest coral reef system on Earth, located off Australia.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'oceanography',
    title: 'OCEANOGRAPHY',
    stories: [
      {
        id: 'ocean-currents',
        title: 'Ocean Currents & Climate',
        description: 'Explore the powerful forces that drive ocean currents and how they influence global climate patterns. Learn about the ocean\'s role as Earth\'s climate regulator.',
        image: '2',
        questions: [
          {
            id: 'd1',
            text: 'What drives ocean currents?',
            options: [
              {
                id: 'e1',
                text: 'Wind, temperature, and salinity differences',
                isCorrect: true,
                feedback: 'Excellent! Ocean currents are driven by wind, temperature differences, and variations in water salinity.'
              },
              {
                id: 'e2',
                text: 'Only wind',
                isCorrect: false,
                feedback: 'Wind is important, but ocean currents are also driven by temperature and salinity differences.'
              }
            ]
          },
          {
            id: 'd2',
            text: 'What is the Gulf Stream?',
            options: [
              {
                id: 'f1',
                text: 'A warm ocean current in the Atlantic',
                isCorrect: true,
                feedback: 'Correct! The Gulf Stream is a powerful warm current that flows from the Gulf of Mexico along the eastern coast of North America.'
              },
              {
                id: 'f2',
                text: 'A type of fish',
                isCorrect: false,
                feedback: 'No, the Gulf Stream is a major ocean current, not a fish species.'
              }
            ]
          },
          {
            id: 'd3',
            text: 'How do ocean currents affect climate?',
            options: [
              {
                id: 'g1',
                text: 'They distribute heat around the planet',
                isCorrect: true,
                feedback: 'Exactly! Ocean currents act like a global conveyor belt, distributing heat and regulating Earth\'s climate.'
              },
              {
                id: 'g2',
                text: 'They only affect local weather',
                isCorrect: false,
                feedback: 'Ocean currents have global effects, not just local ones. They help regulate the entire planet\'s climate.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'marine-conservation',
    title: 'MARINE CONSERVATION',
    stories: [
      {
        id: 'plastic-pollution',
        title: 'Plastic Pollution Crisis',
        description: 'Learn about the devastating impact of plastic pollution on marine ecosystems and discover what we can do to protect our oceans for future generations.',
        image: '3',
        questions: [
          {
            id: 'f1',
            text: 'How much plastic enters the ocean each year?',
            options: [
              {
                id: 'g1',
                text: '8 million tons',
                isCorrect: true,
                feedback: 'Correct! Approximately 8 million tons of plastic enter the ocean every year, equivalent to dumping a garbage truck full of plastic every minute.'
              },
              {
                id: 'g2',
                text: '1 million tons',
                isCorrect: false,
                feedback: 'Much more than that. About 8 million tons of plastic enter the ocean annually.'
              }
            ]
          },
          {
            id: 'f2',
            text: 'How long does plastic take to decompose in the ocean?',
            options: [
              {
                id: 'h1',
                text: 'Hundreds to thousands of years',
                isCorrect: true,
                feedback: 'Exactly! Plastic can take 450-1000 years to decompose, meaning every piece of plastic ever made still exists somewhere.'
              },
              {
                id: 'h2',
                text: 'A few months',
                isCorrect: false,
                feedback: 'Plastic takes much longer to break down - hundreds to thousands of years in the marine environment.'
              }
            ]
          },
          {
            id: 'f3',
            text: 'What is the Great Pacific Garbage Patch?',
            options: [
              {
                id: 'i1',
                text: 'A large area of floating plastic debris',
                isCorrect: true,
                feedback: 'Correct! The Great Pacific Garbage Patch is a massive collection of floating plastic debris in the North Pacific Ocean.'
              },
              {
                id: 'i2',
                text: 'A type of coral reef',
                isCorrect: false,
                feedback: 'No, it\'s not a coral reef. The Great Pacific Garbage Patch is a large area of floating plastic waste.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'marine-life',
    title: 'MARINE LIFE',
    stories: [
      {
        id: 'whale-migration',
        title: '🐋 Whale Migration Patterns',
        description: 'Follow the incredible journeys of whales as they travel thousands of miles across the world\'s oceans. Discover their feeding grounds, breeding areas, and the challenges they face.',
        image: '4',
        questions: []
      },
      {
        id: 'deep-sea-creatures',
        title: '🦑 Deep Sea Mysteries',
        description: 'Dive into the mysterious world of the deep ocean, where strange and wonderful creatures live in complete darkness. Learn about bioluminescence and extreme adaptations.',
        image: '5',
        questions: []
      },
      {
        id: 'shark-ecosystem',
        title: '🦈 Sharks: Ocean Guardians',
        description: 'Discover the vital role sharks play in maintaining healthy ocean ecosystems. Learn about different shark species and why they are essential to marine life.',
        image: '6',
        questions: []
      },
      {
        id: 'seahorse-life',
        title: '🐠 Seahorse Life Cycle',
        description: 'Explore the fascinating world of seahorses - the only fish where males give birth. Learn about their unique anatomy, behavior, and conservation challenges.',
        image: '1',
        questions: []
      },
      {
        id: 'dolphin-intelligence',
        title: '🐬 Dolphin Intelligence',
        description: 'Uncover the remarkable intelligence of dolphins, their complex social structures, communication methods, and the threats they face from human activities.',
        image: '2',
        questions: []
      },
      {
        id: 'jellyfish-adaptations',
        title: '🪼 Jellyfish Adaptations',
        description: 'Learn about the ancient and successful jellyfish, their unique adaptations, life cycles, and their increasing presence in our changing oceans.',
        image: '3',
        questions: []
      }
    ]
  }
];