<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use MStaack\LaravelPostgis\Eloquent\PostgisTrait;

class Zone extends Model
{
    use PostgisTrait;

    protected $fillable = [
        'soato',
        'level',
        'geom',
        'accuracy',
        'details',
        'pga_value',
    ];

    protected $postgisFields = [
        'geom'
    ];

    protected $postgisTypes = [
        'geom' => [
            'geomtype' => 'geometry',
            'srid' => 4326
        ]
    ];

    /**
     * The districts that belong to the Zone
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function districts(): BelongsToMany
    {
        return $this
            ->belongsToMany(District::class, 'area_layer', 'layer_id', 'area_soato', 'id', 'soato')
            ->wherePivot('layer_type', 'zone');
    }

    /**
     * The regions that belong to the Zone
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function regions(): BelongsToMany
    {
        return $this
            ->belongsToMany(Region::class, 'area_layer', 'layer_id', 'area_soato', 'id', 'soato')
            ->wherePivot('layer_type', 'zone');
    }
}
