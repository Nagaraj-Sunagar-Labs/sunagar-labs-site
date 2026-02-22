package com.sunagarlabs.portfolio.resource.dto;

import com.sunagarlabs.portfolio.resource.entity.ResourceCategory;
import java.time.Instant;
import java.util.UUID;
import lombok.Builder;

@Builder
public record ResourceResponse(
        UUID id,
        String title,
        String description,
        ResourceCategory category,
        String type,
        String link,
        Instant createdAt
) {
}
