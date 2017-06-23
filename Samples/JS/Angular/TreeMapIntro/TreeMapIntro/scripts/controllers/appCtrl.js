'use strict';

// get reference to app module
var app = angular.module('app');

// add controller to app module
app.controller('appCtrl', function appCtrl($scope) {
    function rand() {
        return Math.round(Math.random() * 100);
    }
    // generate some random data
    var categories = ['Beverages', 'Condiments', 'Confections', 'Dairy Products', 'Grains/Cereals', 'Meat/Poultry', 'Produce', 'Seafood'],
        subCategories = [['Soft drinks', 'Coffees', 'Teas', 'Beers', 'Ales'], ['Sweet and Savory sauces', 'Relishes', 'Spreads', 'Seasonings'],
            ['Desserts', 'Candies', 'Sweet breads'], ['Chesses'], ['Breads', 'Crackers', 'Pasta', 'Cereal'], ['Prepared meats'], ['Dried fruit', 'Bean curd'], ['Seaweed', 'Fish']];

    function getData() {
        var data = [];

        categories.forEach(function (c, idx) {
            var sub = subCategories[idx];
            sub.forEach(function (s) {
                data.push({
                    category: c,
                    subCategory: s,
                    sales: rand()
                });
            });
        });
        return data;
    }

    function getGroupCVData() {
        var data = [],
            len = 1000,
            catLen = categories.length,
            subCat, randomC, randomSC;

        for (var i = 0; i < len; i++) {
            randomC = Math.floor(Math.random() * catLen);
            subCat = subCategories[randomC];
            randomSC = Math.floor(Math.random() * subCat.length);

            data.push({
                category: categories[randomC],
                subCategory: subCat[randomSC],
                sales: rand()
            });
        }
        var cv = new wijmo.collections.CollectionView(data);


        cv.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('category'));
        cv.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('subCategory'));
        return cv;
    }

    function getMaxDepthData() {
        var data = [{
            type: 'Music',
            items: [{
                type: 'Country',
                items: [{
                    type: 'Classic Country',
                    sales: rand()
                }, {
                    type: 'Cowboy Country',
                    sales: rand()
                }, {
                    type: 'Outlaw Country',
                    sales: rand()
                }, {
                    type: 'Western Swing',
                    sales: rand()
                }, {
                    type: 'Roadhouse Country',
                    sales: rand()
                }]
            }, {
                type: 'Rock',
                items: [{
                    type: 'Hard Rock',
                    sales: rand()
                }, {
                    type: 'Blues Rock',
                    sales: rand()
                }, {
                    type: 'Funk Rock',
                    sales: rand()
                }, {
                    type: 'Rap Rock',
                    sales: rand()
                }, {
                    type: 'Guitar Rock',
                    sales: rand()
                }, {
                    type: 'Progressive Rock',
                    sales: rand()
                }]
            }, {
                type: 'Classical',
                items: [{
                    type: 'Symphonies',
                    sales: rand()
                }, {
                    type: 'Chamber Music',
                    sales: rand()
                }]
            }, {
                type: 'Soundtracks',
                items: [{
                    type: 'Movie Soundtracks',
                    sales: rand()
                }, {
                    type: 'Musical Soundtracks',
                    sales: rand()
                }]
            }, {
                type: 'Jazz',
                items: [{
                    type: 'Smooth Jazz',
                    sales: rand()
                }, {
                    type: 'Vocal Jazz',
                    sales: rand()
                }, {
                    type: 'Jazz Fusion',
                    sales: rand()
                }, {
                    type: 'Swing Jazz',
                    sales: rand()
                }, {
                    type: 'Cool Jazz',
                    sales: rand()
                }, {
                    type: 'Traditional Jazz',
                    sales: rand()
                }]
            }, {
                type: 'Electronic',
                items: [{
                    type: 'Electronica',
                    sales: rand()
                }, {
                    type: 'Disco',
                    sales: rand()
                }, {
                    type: 'House',
                    sales: rand()
                }]
            }]
        }, {
            type: 'Video',
            items: [{
                type: 'Movie',
                items: [{
                    type: 'Kid & Family',
                    sales: rand()
                }, {
                    type: 'Action & Adventure',
                    sales: rand()
                }, {
                    type: 'Animation',
                    sales: rand()
                }, {
                    type: 'Comedy',
                    sales: rand()
                }, {
                    type: 'Drama',
                    sales: rand()
                }, {
                    type: 'Romance',
                    sales: rand()
                }]
            }, {
                type: 'TV',
                items: [{
                    type: 'Science Fiction',
                    sales: rand()
                }, {
                    type: 'Documentary',
                    sales: rand()
                }, {
                    type: 'Fantasy',
                    sales: rand()
                }, {
                    type: 'Military & War',
                    sales: rand()
                }, {
                    type: 'Horror',
                    sales: rand()
                }]
            }]
        }, {
            type: 'Books',
            items: [{
                type: 'Arts & Photography',
                items: [{
                    type: 'Architecture',
                    sales: rand()
                }, {
                    type: 'Graphic Design',
                    sales: rand()
                }, {
                    type: 'Drawing',
                    sales: rand()
                }, {
                    type: 'Photography',
                    sales: rand()
                }, {
                    type: 'Performing Arts',
                    sales: rand()
                }]
            }, {
                type: "Children's Books",
                items: [{
                    type: 'Beginning Readers',
                    sales: rand()
                }, {
                    type: 'Board Books',
                    sales: rand()
                }, {
                    type: 'Chapter Books',
                    sales: rand()
                }, {
                    type: 'Coloring Books',
                    sales: rand()
                }, {
                    type: 'Picture Books',
                    sales: rand()
                }, {
                    type: 'Sound Books',
                    sales: rand()
                }]
            }, {
                type: 'History',
                items: [{
                    type: 'Ancient',
                    sales: rand()
                }, {
                    type: 'Medieval',
                    sales: rand()
                }, {
                    type: 'Renaissance',
                    sales: rand()
                }]
            }, {
                type: 'Mystery',
                items: [{
                    type: 'Mystery',
                    sales: rand()
                }, {
                    type: 'Thriller & Suspense',
                    sales: rand()
                }]
            }, {
                type: 'Romance',
                items: [{
                    type: 'Action & Adventure',
                    sales: rand()
                }, {
                    type: 'Holidays',
                    sales: rand()
                }, {
                    type: 'Romantic Comedy',
                    sales: rand()
                }, {
                    type: 'Romantic Suspense',
                    sales: rand()
                }, {
                    type: 'Western',
                    sales: rand()
                }, {
                    type: 'Historical',
                    sales: rand()
                }]
            }, {
                type: 'Sci-Fi & Fantasy',
                items: [{
                    type: 'Fantasy',
                    sales: rand()
                }, {
                    type: 'Gaming',
                    sales: rand()
                }, {
                    type: 'Science Fiction',
                    sales: rand()
                }]
            }]
        }, {
            type: 'Electronics',
            items: [{
                type: 'Camera',
                items: [{
                    type: 'Digital Cameras',
                    sales: rand()
                }, {
                    type: 'Film Photography',
                    sales: rand()
                }, {
                    type: 'Lenses',
                    sales: rand()
                }, {
                    type: 'Video',
                    sales: rand()
                }, {
                    type: 'Accessories',
                    sales: rand()
                }]
            }, {
                type: 'Headphones',
                items: [{
                    type: 'Earbud headphones',
                    sales: rand()
                }, {
                    type: 'Over-ear headphones',
                    sales: rand()
                }, {
                    type: 'On-ear headphones',
                    sales: rand()
                }, {
                    type: 'Bluetooth headphones',
                    sales: rand()
                }, {
                    type: 'Noise-cancelling headphones',
                    sales: rand()
                }, {
                    type: 'Audiophile headphones',
                    sales: rand()
                }]
            }, {
                type: 'Cell Phones',
                items: [{
                    type: 'Cell Phones',
                    sales: rand()
                }, {
                    type: 'Accessories',
                    items: [{
                        type: 'Batteries',
                        sales: rand()
                    }, {
                        type: 'Bluetooth Headsets',
                        sales: rand()
                    }, {
                        type: 'Bluetooth Speakers',
                        sales: rand()
                    }, {
                        type: 'Chargers',
                        sales: rand()
                    }, {
                        type: 'Screen Protectors',
                        sales: rand()
                    }]
                }]
            }, {
                type: 'Wearable Technology',
                items: [{
                    type: 'Activity Trackers',
                    sales: rand()
                }, {
                    type: 'Smart Watches',
                    sales: rand()
                }, {
                    type: 'Sports & GPS Watches',
                    sales: rand()
                }, {
                    type: 'Virtual Reality Headsets',
                    sales: rand()
                }, {
                    type: 'Wearable Cameras',
                    sales: rand()
                }, {
                    type: 'Smart Glasses',
                    sales: rand()
                }]
            }]
        }, {
            type: 'Computers & Tablets',
            items: [{
                type: 'Desktops',
                items: [{
                    type: 'All-in-ones',
                    sales: rand()
                }, {
                    type: 'Minis',
                    sales: rand()
                }, {
                    type: 'Towers',
                    sales: rand()
                }]
            }, {
                type: 'Laptops',
                items: [{
                    type: '2 in 1 laptops',
                    sales: rand()
                }, {
                    type: 'Traditional laptops',
                    sales: rand()
                }]
            }, {
                type: 'Tablets',
                items: [{
                    type: 'iOS',
                    sales: rand()
                }, {
                    type: 'Andriod',
                    sales: rand()
                }, {
                    type: 'Fire os',
                    sales: rand()
                }, {
                    type: 'Windows',
                    sales: rand()
                }]
            }]
        }];
        return data;
    }

    // add data array to scope
    $scope.data = getData();
    $scope.groupData = getGroupCVData();
    $scope.maxDepthData = getMaxDepthData();
    $scope.inputMaxDepth = null;
    $scope.typeTM = null;
    $scope.maxDepthTM = null;
    $scope.maxDepth = 2;
    $scope.bindingName = ['category', 'subCategory'];
    $scope.palette1 = [{
        titleColor: '#00277d',
        maxColor: 'rgba(0,39,125,0.7)',
        minColor: 'rgba(168,187,230,0.7)'
    }, {
        titleColor: '#7d1f00',
        maxColor: 'rgba(125,21,0,0.7)',
        minColor: 'rgba(230,183,168,0.7)'
    }, {
        titleColor: '#007d27',
        maxColor: 'rgba(0,125,39,0.7)',
        minColor: 'rgba(168,230,188,0.7)'
    }, {
        titleColor: '#7d003c',
        maxColor: 'rgba(125,0,60,0.7)',
        minColor: 'rgba(230,168,198,0.7)'
    }, {
        titleColor: '#7d4300',
        maxColor: 'rgba(125,67,0,0.7)',
        minColor: 'rgba(230,201,168,0.7)'
    }, {
        titleColor: '#51007d',
        maxColor: 'rgba(81,0,125,0.7)',
        minColor: 'rgba(209,170,230,0.7)'
    }, {
        titleColor: '#7d7400',
        maxColor: 'rgba(125,116,0,0.7)',
        minColor: 'rgba(230,226,168,0.7)'
    }, {
        titleColor: '#970000',
        maxColor: 'rgba(151,0,0,0.7)',
        minColor: 'rgba(230,169,169,0.7)'
    }];
    $scope.palette2 = ['#88bde6', '#fbb258', '#90cd97', '#f6aac9', '#bfa554', '#bc99c7', '#eddd46', '#f07e6e', '#8c8c8c'];

    $scope.typeChanged = function (sender) {
        $scope.typeTM.type = wijmo.chart.hierarchical.TreeMapType[sender.selectedValue]
        sender.header = 'Type: <b>' + sender.selectedValue + '</b>';
    };

    $scope.$watch('maxDepth', function () {
        var maxDepth = $scope.inputMaxDepth,
            val = $scope.maxDepth;
        if (maxDepth != null) {
            if (val < maxDepth.min || val > maxDepth.max) {
                return;
            }
            $scope.maxDepthTM.maxDepth = val;
        }
    });

});
