// data and helper methods for sample
var app = {
    categories: ['Beverages', 'Condiments', 'Confections', 'Dairy Products', 'Grains/Cereals', 'Meat/Poultry', 'Produce', 'Seafood'],
    subCategories: [['Soft drinks', 'Coffees', 'Teas', 'Beers', 'Ales'], ['Sweet and Savory sauces', 'Relishes', 'Spreads', 'Seasonings'],
        ['Desserts', 'Candies', 'Sweet breads'], ['Chesses'], ['Breads', 'Crackers', 'Pasta', 'Cereal'], ['Prepared meats'], ['Dried fruit', 'Bean curd'], ['Seaweed', 'Fish']],
    rand: function () {
        return Math.round(Math.random() * 100)
    },

    getData: function() {
        var self = this,
            data = [];

        this.categories.forEach(function(c, idx) {
            var sub = self.subCategories[idx];
            sub.forEach(function(s) {
                data.push({
                    category: c,
                    subCategory: s,
                    sales: self.rand()
                });
            });
        });
        return data;
    },
    getGroupCVData: function() {
        var data = [],
            len = 1000,
            catLen = this.categories.length,
            subCat, randomC, randomSC;

        for (var i = 0; i < len; i++) {
            randomC = Math.floor(Math.random() * catLen);
            subCat = this.subCategories[randomC];
            randomSC = Math.floor(Math.random() * subCat.length);

            data.push({
                category: this.categories[randomC],
                subCategory: subCat[randomSC],
                sales: this.rand()
            });
        }
        var cv = new wijmo.collections.CollectionView(data);

        
        cv.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('category'));
        cv.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('subCategory'));
        return cv;
    },
    getMaxDepthData: function () {
        var data = [{
            type: 'Music',
            items: [{
                type: 'Country',
                items: [{
                    type: 'Classic Country',
                    sales: this.rand()
                }, {
                    type: 'Cowboy Country',
                    sales: this.rand()
                }, {
                    type: 'Outlaw Country',
                    sales: this.rand()
                }, {
                    type: 'Western Swing',
                    sales: this.rand()
                }, {
                    type: 'Roadhouse Country',
                    sales: this.rand()
                }]
            }, {
                type: 'Rock',
                items: [{
                    type: 'Hard Rock',
                    sales: this.rand()
                }, {
                    type: 'Blues Rock',
                    sales: this.rand()
                }, {
                    type: 'Funk Rock',
                    sales: this.rand()
                }, {
                    type: 'Rap Rock',
                    sales: this.rand()
                }, {
                    type: 'Guitar Rock',
                    sales: this.rand()
                }, {
                    type: 'Progressive Rock',
                    sales: this.rand()
                }]
            }, {
                type: 'Classical',
                items: [{
                    type: 'Symphonies',
                    sales: this.rand()
                }, {
                    type: 'Chamber Music',
                    sales: this.rand()
                }]
            }, {
                type: 'Soundtracks',
                items: [{
                    type: 'Movie Soundtracks',
                    sales: this.rand()
                }, {
                    type: 'Musical Soundtracks',
                    sales: this.rand()
                }]
            }, {
                type: 'Jazz',
                items: [{
                    type: 'Smooth Jazz',
                    sales: this.rand()
                }, {
                    type: 'Vocal Jazz',
                    sales: this.rand()
                }, {
                    type: 'Jazz Fusion',
                    sales: this.rand()
                }, {
                    type: 'Swing Jazz',
                    sales: this.rand()
                }, {
                    type: 'Cool Jazz',
                    sales: this.rand()
                }, {
                    type: 'Traditional Jazz',
                    sales: this.rand()
                }]
            }, {
                type: 'Electronic',
                items: [{
                    type: 'Electronica',
                    sales: this.rand()
                }, {
                    type: 'Disco',
                    sales: this.rand()
                }, {
                    type: 'House',
                    sales: this.rand()
                }]
            }]
        }, {
            type: 'Video',
            items: [{
                type: 'Movie',
                items: [{
                    type: 'Kid & Family',
                    sales: this.rand()
                }, {
                    type: 'Action & Adventure',
                    sales: this.rand()
                }, {
                    type: 'Animation',
                    sales: this.rand()
                }, {
                    type: 'Comedy',
                    sales: this.rand()
                }, {
                    type: 'Drama',
                    sales: this.rand()
                }, {
                    type: 'Romance',
                    sales: this.rand()
                }]
            }, {
                type: 'TV',
                items: [{
                    type: 'Science Fiction',
                    sales: this.rand()
                }, {
                    type: 'Documentary',
                    sales: this.rand()
                }, {
                    type: 'Fantasy',
                    sales: this.rand()
                }, {
                    type: 'Military & War',
                    sales: this.rand()
                }, {
                    type: 'Horror',
                    sales: this.rand()
                }]
            }]
        }, {
            type: 'Books',
            items: [{
                type: 'Arts & Photography',
                items: [{
                    type: 'Architecture',
                    sales: this.rand()
                }, {
                    type: 'Graphic Design',
                    sales: this.rand()
                }, {
                    type: 'Drawing',
                    sales: this.rand()
                }, {
                    type: 'Photography',
                    sales: this.rand()
                }, {
                    type: 'Performing Arts',
                    sales: this.rand()
                }]
            }, {
                type: "Children's Books",
                items: [{
                    type: 'Beginning Readers',
                    sales: this.rand()
                }, {
                    type: 'Board Books',
                    sales: this.rand()
                }, {
                    type: 'Chapter Books',
                    sales: this.rand()
                }, {
                    type: 'Coloring Books',
                    sales: this.rand()
                }, {
                    type: 'Picture Books',
                    sales: this.rand()
                }, {
                    type: 'Sound Books',
                    sales: this.rand()
                }]
            }, {
                type: 'History',
                items: [{
                    type: 'Ancient',
                    sales: this.rand()
                }, {
                    type: 'Medieval',
                    sales: this.rand()
                }, {
                    type: 'Renaissance',
                    sales: this.rand()
                }]
            }, {
                type: 'Mystery',
                items: [{
                    type: 'Mystery',
                    sales: this.rand()
                }, {
                    type: 'Thriller & Suspense',
                    sales: this.rand()
                }]
            }, {
                type: 'Romance',
                items: [{
                    type: 'Action & Adventure',
                    sales: this.rand()
                }, {
                    type: 'Holidays',
                    sales: this.rand()
                }, {
                    type: 'Romantic Comedy',
                    sales: this.rand()
                }, {
                    type: 'Romantic Suspense',
                    sales: this.rand()
                }, {
                    type: 'Western',
                    sales: this.rand()
                }, {
                    type: 'Historical',
                    sales: this.rand()
                }]
            }, {
                type: 'Sci-Fi & Fantasy',
                items: [{
                    type: 'Fantasy',
                    sales: this.rand()
                }, {
                    type: 'Gaming',
                    sales: this.rand()
                }, {
                    type: 'Science Fiction',
                    sales: this.rand()
                }]
            }]
        }, {
            type: 'Electronics',
            items: [{
                type: 'Camera',
                items: [{
                    type: 'Digital Cameras',
                    sales: this.rand()
                }, {
                    type: 'Film Photography',
                    sales: this.rand()
                }, {
                    type: 'Lenses',
                    sales: this.rand()
                }, {
                    type: 'Video',
                    sales: this.rand()
                }, {
                    type: 'Accessories',
                    sales: this.rand()
                }]
            }, {
                type: 'Headphones',
                items: [{
                    type: 'Earbud headphones',
                    sales: this.rand()
                }, {
                    type: 'Over-ear headphones',
                    sales: this.rand()
                }, {
                    type: 'On-ear headphones',
                    sales: this.rand()
                }, {
                    type: 'Bluetooth headphones',
                    sales: this.rand()
                }, {
                    type: 'Noise-cancelling headphones',
                    sales: this.rand()
                }, {
                    type: 'Audiophile headphones',
                    sales: this.rand()
                }]
            }, {
                type: 'Cell Phones',
                items: [{
                    type: 'Cell Phones',
                    sales: this.rand()
                }, {
                    type: 'Accessories',
                    items: [{
                        type: 'Batteries',
                        sales: this.rand()
                    }, {
                        type: 'Bluetooth Headsets',
                        sales: this.rand()
                    }, {
                        type: 'Bluetooth Speakers',
                        sales: this.rand()
                    }, {
                        type: 'Chargers',
                        sales: this.rand()
                    }, {
                        type: 'Screen Protectors',
                        sales: this.rand()
                    }]
                }]
            }, {
                type: 'Wearable Technology',
                items: [{
                    type: 'Activity Trackers',
                    sales: this.rand()
                }, {
                    type: 'Smart Watches',
                    sales: this.rand()
                }, {
                    type: 'Sports & GPS Watches',
                    sales: this.rand()
                }, {
                    type: 'Virtual Reality Headsets',
                    sales: this.rand()
                }, {
                    type: 'Wearable Cameras',
                    sales: this.rand()
                }, {
                    type: 'Smart Glasses',
                    sales: this.rand()
                }]
            }]
        }, {
            type: 'Computers & Tablets',
            items: [{
                type: 'Desktops',
                items: [{
                    type: 'All-in-ones',
                    sales: this.rand()
                }, {
                    type: 'Minis',
                    sales: this.rand()
                }, {
                    type: 'Towers',
                    sales: this.rand()
                }]
            }, {
                type: 'Laptops',
                items: [{
                    type: '2 in 1 laptops',
                    sales: this.rand()
                }, {
                    type: 'Traditional laptops',
                    sales: this.rand()
                }]
            }, {
                type: 'Tablets',
                items: [{
                    type: 'iOS',
                    sales: this.rand()
                }, {
                    type: 'Andriod',
                    sales: this.rand()
                }, {
                    type: 'Fire os',
                    sales: this.rand()
                }, {
                    type: 'Windows',
                    sales: this.rand()
                }]
            }]
        }];
        return data;
    },
    updateMenuHeader: function (menu, prefix, text) {
        menu.header = prefix + text;
    },
};